import Vue from 'vue'
import { Button, message } from 'ant-design-vue'
import '@/components/antd/index.less'

Vue.use(Button)

Vue.prototype.$message = message
