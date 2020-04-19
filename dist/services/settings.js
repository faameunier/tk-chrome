class SettingsManager{constructor(){return SettingsManager.instance||(logger(this,"Instanciating empty SettingsManager"),SettingsManager.instance=this,this.init(),this.initProfiles(),this.loaded=!1),SettingsManager.instance}async init(){this.active_profile=RELAXED,this.settings=INIT_RELAXED_PROFILE}async initProfiles(){this.profiles={focused:INIT_FOCUSED_PROFILE,relaxed:INIT_RELAXED_PROFILE}}async reset(){logger(this,"Hard reset"),this.init(),this.initProfiles(),await this.save(),await this.load()}async save(){logger(this,"Saved"),await storageSet({settings:this.settings,active_profile:this.active_profile})}async load(){if(!this.loaded){let a=await storageGet(["settings","active_profile"]);try{if(logger(this,"Loading settings from storage"),"undefined"!=typeof a.settings&&"undefined"!=typeof a.active_profile)this.settings=a.settings,this.active_profile=a.active_profile;else throw"Loading failed or version change"}catch(a){logger(this,"Loading settings fail"),await this.save()}this.loaded=!0}}async updateSettings(a){this.settings=a,await this.save()}async updateSettingsProfile(a){this.active_profile=a,a!==CUSTOMIZED&&(this.settings=this.profiles[a]),await this.save()}}var settingsManager=new SettingsManager;