import style from '@/assets/style/text.module.scss'
import { Button } from 'antd'
import {StepBackwardOutlined} from '@ant-design/icons'
const Text = function() {
    return (
        <div className={style.box}>
            text组件
            <Button>按钮</Button>
            <StepBackwardOutlined />
        </div>
    )
}

export default Text