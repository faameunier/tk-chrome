const logger = function (...args) {
    if (ENV === 'debug' || ENV === 'dev') {
        let pre = new Date().toUTCString()
        if (typeof args[0] === 'object') {
            pre += ' | ' + args[0].constructor.name + ' | '
            pre += args[1]
        } else {
            pre += ' | ' + args[0]
        }
        console.log(pre)
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function getDomain(str) {
    try {
        return psl.parse(new URL(str).hostname).domain
    } catch {
        return str
    }
}

function storageSet(args) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.set(args, function () {
            resolve()
        })
    })
}

function storageGet(args) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(args, function (data) {
            resolve(data)
        })
    })
}

logger('Starting in ' + ENV + ' env.')
