/**
 * 公共函数
 */
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import lodashDebounce from 'lodash/debounce';
import lodashThrottle from 'lodash/throttle';

const help = {
	/**
	 * lodash库方法的引用
	 *
	 * 使用时demo，在created方法中调用重写metheds中的方法：
	 * created() {
	 *   this.submitNewUser = this.$help.throttle(
   *   this.submitNewUser,
   *   500
   * );
   * this.submitEditUser = this.$help.debounce(
   *   this.submitEditUser,
   *   500
   * );
	 */
	throttle: lodashThrottle,	// 单位时间只有第一次生效
	debounce: lodashDebounce,	// 触发一个时间后执行，如果这段时间被触发则重新计时

	/**
	 * Base64加密
	 * @param {String} str 待加密字符串
	 */
	base64(str) {
		const base64 = Base64.stringify(Utf8.parse(str));
		return base64;
	},

	/**
	 * 把小数拆分成整数和小数部分，如果输入的不是，那么转为数字返回
	 * @param {Number or String} num 待转换数字或数字字符串
	 */
	splitNumber(num) {
		let number = typeof num === 'number' ? num : Number(num);
		if (parseInt(number) === number) {
			return number;
		} else {
			let ret = [];
			let numberArray = num.split('.');
			ret.push(Number(numberArray[0]));
			ret.push(Number(numberArray[1]));
			return ret;
		}
	},

	/**
	 * 随机数据生成工具函数
	 * @param {Number} len 随机字符串的长度（默认16位）
	 */
	randomString(len = 8) {
		const dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
		const maxPos = dict.length;
		let pwd = '';
		for (i = 0; i < len; i++) {
			pwd += dict.charAt(Math.floor(Math.random() * maxPos));
		}
		return pwd;
	},

	/**
	 * 生成从minNum到maxNum的随机数
	 * @param {Number} minNum 前区间
	 * @param {Number} maxNum 后区间
	 */
	randomNum(minNum, maxNum) {
		switch (arguments.length) {
			case 1:
				return parseInt(Math.random() * minNum + 1, 10);
			case 2:
				return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
			default:
				return 0;
		}
	},
}

export default help;