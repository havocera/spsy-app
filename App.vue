<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
<script>
import { api_base_url} from './config.js'
export default {
	onLaunch: function() {
	uni.removeStorageSync('dev');
	uni.removeStorageSync('ble');

	},
	onShow: function() {
		
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		
	}
};
</script>
