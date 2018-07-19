<template>
	<div class="main">
		<mt-search >
		  <mt-search
			  cancel-text="取消"
			  placeholder="搜索">
		 </mt-search>
		</mt-search>
	</div>
</template>

<script>
import { Search } from 'mint-ui';
export default {
  name: 'index',
  data () {
    return {
    	
    }
  },
  components:{
  	Search
  }
}
</script>

<style lang="scss">
	.main{
		position: absolute;
	    top: 0.5rem;
	    right: 18%;
	    .mint-search{
	    	height: 100% !important;
	    }
	}
</style>