// 数据存储的工具箱

const STORAGE_KEY = 'mall'

export default {
	// 存储值
	setItem(key, value, module_name) {
		if (module_name) {
			let val = this.getItem(module_name)
			val[key] = value
			this.setItem(module_name, val)
		} else {
			let val = this.getStorage()
			val[key] = value
			window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
		}
	},
	// 获取某一个模块下面的属性user下面的username
	getItem(key, module_name) {
		if (module_name) {
			let val = this.getItem(module_name)
			if (val) return val[key]
		}
		return this.getStorage()[key]
	},
	getStorage() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || {}))
	},
	// 清空某一个值
	clear(key, module_name) {
		let val = this.getStorage()
		if (module_name) {
			delete val[module_name][key]
		} else {
			delete val[key]
		}
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
	},
}
&nbsp;&nbsp;&nbsp;&nbsp;train_id&nbsp;=&nbsp;pickle.load(open("../EANN-KDD18-master/Data/weibo/train_id.pickle",&nbsp;'rb')) &nbsp;&nbsp;&nbsp;&nbsp;val_id&nbsp;=&nbsp;pickle.load(open("../EANN-KDD18-master/Data/weibo/validate_id.pickle",&nbsp;'rb')) &nbsp;&nbsp;&nbsp;&nbsp;stop_words&nbsp;=&nbsp;process_data_weibo.stopwordslist()&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;pre_path&nbsp;=&nbsp;'F:/data/EANN-KDD18-master/Data/weibo/tweets/' &nbsp;&nbsp;&nbsp;&nbsp;file_list&nbsp;=&nbsp;[pre_path&nbsp;+&nbsp;"test_nonrumor.txt",&nbsp;pre_path&nbsp;+&nbsp;"test_rumor.txt",&nbsp;\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pre_path&nbsp;+&nbsp;"train_nonrumor.txt",&nbsp;pre_path&nbsp;+&nbsp;"train_rumor.txt"] &nbsp;&nbsp;&nbsp;&nbsp;nonrumor_images&nbsp;=&nbsp;deal_image('F:/data/EANN-KDD18-master/Data/weibo/nonrumor_images/') &nbsp;&nbsp;&nbsp;&nbsp;rumor_images&nbsp;=&nbsp;deal_image('F:/data/EANN-KDD18-master/Data/weibo/rumor_images/') &nbsp;&nbsp;&nbsp;&nbsp;#train &nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;k,f&nbsp;in&nbsp;enumerate(file_list): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;=&nbsp;open(f,encoding='utf-8') &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(k&nbsp;+&nbsp;1)&nbsp;%&nbsp;2&nbsp;==&nbsp;1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label&nbsp;=&nbsp;0&nbsp;&nbsp;###&nbsp;real&nbsp;is&nbsp;0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label&nbsp;=&nbsp;1&nbsp;&nbsp;####fake&nbsp;is&nbsp;1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lines&nbsp;=&nbsp;f.readlines() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;post_id&nbsp;=&nbsp;"" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url&nbsp;=&nbsp;"" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;i,&nbsp;line&nbsp;in&nbsp;enumerate(lines): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp
