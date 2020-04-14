function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}class MemoryManager{constructor(){return _defineProperty(this,"empty_stats",{total_active_time:0,total_inactive_time:0,total_cached_time:0,last_active_timestamp:null,activated:0,updated_at:null}),_defineProperty(this,"empty_tab",{tabId:null,url:null,statistics:{},pinned:!1,active:!1,audible:!1,favIconUrl:null,title:null,windowId:null,cache:[]}),MemoryManager.instance||(logger(this,"Instanciating empty MemoryManager"),MemoryManager.instance=this,this.init()),MemoryManager.instance}async init(){this.tabs={},this.closed_history=[],this.current_scores={},this.runtime_events={last_full_stats_update:Date.now(),last_garbage_collector:Date.now()},this.settings={memory:{cache_size:5,min_time_full_stats_update:1000,min_time_garbage_collector:300000},policy:{target_tabs:12,score_threshold:50,decay:.8,min_time:3000,last_policy_runs:{},active:!1,pinned:!1,audible:!1},scorer:{min_active:3000,cached_decay:.7}}}async reset(){this.init(),await this.save(),await this.load()}async save(){logger(this,"Saved"),await storageSet({tabs:JSON.stringify(this.tabs),closed_history:this.closed_history,settings:this.settings,current_scores:this.current_scores,runtime_events:this.runtime_events})}async load(){await storageGet(["tabs","closed_history","current_scores","settings","runtime_events"]).then(a=>{try{logger(this,"Loading state from storage"),this.closed_history=a.closed_history,this.runtime_events=a.runtime_events,this.current_scores=current_scores,this.tabs=JSON.parse(a.tabs),this.settings=a.settings;for(let a of Object.keys(this.tabs)){let b=this.tabs[a];b.cache=LRUfactory.fromJSON(b.cache)}}catch(a){logger(this,"Loading fail, init memory")}})}async log(){await this.updateAllStatistics(),await this.cleanTabs(),"debug"===ENV&&console.log(this.tabs)}async setActivated(a,b){if(!this.tabs[a])return logger(this,"OOS Unknown activated tab, creating shell"),await this.createTab({id:a,active:!0,windowId:b}),null;this.tabs[a].windowId!==b&&(logger(this,"OOS Tab "+a+"is in wrong window"),await this.changeWindow(a,b));let c=_.filter(Object.values(this.tabs),a=>a.windowId==b);for(var d=0;d<c.length;d++){let b=c[d];b.active&&b.tabId!==a&&(await this.updateStatistics(b,!1,!1),b.active=!1)}await this.updateStatistics(this.tabs[a],!1,!0),this.tabs[a].active=!0}async createTab(a){if("undefined"!=typeof a.id){let b=copy(this.empty_tab);b.tabId=a.id,b.pinned=a.pinned,b.windowId=a.windowId,"undefined"!=typeof a.url&&(b.url=getDomain(a.url),b.full_url=a.url,b.seesionId=""),b.cache="undefined"==typeof a.cache?new LRU(this.settings.memory.cache_size):a.cache,b.pinned="undefined"!=typeof a.pinned&&a.pinned,b.audible="undefined"!=typeof a.audible&&a.audible,"undefined"!=typeof a.favIconUrl&&(b.favIconUrl=a.favIconUrl),"undefined"!=typeof a.title&&(b.title=a.title),"undefined"==typeof a.statistics?await this.createStatistics(b):b.statistics=a.statistics,this.tabs[a.id]=b,a.active&&(await this.setActivated(a.id,a.windowId)),logger(this,"Tab "+a.id+" added to memory")}}async changeWindow(a,b){logger(this,"Tab assigned to new window"),this.tabs[a]?this.tabs[a].windowId=b:(logger(this,"OOS Missing tab found"),await this.createTab({id:a,windowId:b}))}async updateTab(a,b,c){logger(this,"Updating tab "+a),this.tabs[a]||(logger(this,"OOS Missing tab found"),await this.createTab(c)),this.tabs[a].windowId!==c.windowId&&(logger(this,"OOS tab in wrong window"),await this.changeWindow(a,c.windowId));let d=this.tabs[a];if("undefined"!=typeof b.url){let a=getDomain(b.url),c=b.url,e=d.url;if(d.url=a,d.full_url=c,a!==e){await this.updateStatistics(d,!1,!1);let b=d.statistics,c=d.cache.read(a);c?(d.statistics=c,await this.updateStatistics(d,!0,!1),logger(this,"Old state restored from cache")):(await this.createStatistics(d),logger(this,"State couldn't be restored")),d.cache.write(e,b)}}"undefined"!=typeof b.pinned&&(d.pinned=b.pinned),"undefined"!=typeof b.audible&&(d.audible=b.audible),"undefined"!=typeof b.favIconUrl&&(d.favIconUrl=b.favIconUrl),"undefined"!=typeof b.title&&(d.title=b.title)}async deleteTab(a){logger(this,"Deleting tab "+a);try{delete this.tabs[a]}catch(a){logger(this,"OOS trying to delete unknown tab")}}async createStatistics(a){let b=copy(this.empty_stats),c=Date.now();a.active&&(b.last_active_timestamp=c,b.activated=1),b.updated_at=c,a.statistics=b}async updateStatistics(a,b=!1,c=!1){let d=Date.now();b?(c=!0,a.statistics.total_cached_time+=d-a.statistics.updated_at,a.statistics.updated_at=d,a.statistics.activated+=1):(a.active?(a.statistics.total_active_time+=d-a.statistics.updated_at,a.statistics.last_active_timestamp=d):((c||0===a.statistics.activated)&&(a.statistics.activated+=1),a.statistics.total_inactive_time+=d-a.statistics.updated_at),a.statistics.updated_at=d)}async updateAllStatistics(){let a=Date.now();if(a-this.runtime_events.last_full_stats_update>=this.settings.memory.min_time_full_stats_update){logger(this,"Running full stats");for(var b=Object.keys(this.tabs),c=0;c<b.length;c++)await this.updateStatistics(this.tabs[b[c]]);this.runtime_events.last_full_stats_update=a}}async removeTabFromClosedHistory(a){this.closed_history=this.closed_history.filter(b=>b.tabId!==a)}async restoreTab(a){const b=this.closed_history.filter(b=>b.tabId===a)[0];chrome.tabs.create({url:b.full_url,active:!1})}async updateSettings(a){this.settings=a}async cleanTabsDelay(){let a=Date.now();a-this.runtime_events.last_garbage_collector>=this.settings.memory.min_time_garbage_collector&&(await this.cleanTabs(),this.runtime_events.last_garbage_collector=a)}async cleanTabs(){var a=Object.keys(this.tabs);for(let b,c=0;c<a.length;c++){b=a[c];try{let a=new Promise((a,c)=>{chrome.tabs.get(parseInt(b),function(){chrome.runtime.lastError?c(!1):a()})});await a}catch(a){logger(this,"Tab "+b+" collected by garbage cleaner"),await this.deleteTab(b)}}}}var memoryManager=new MemoryManager;