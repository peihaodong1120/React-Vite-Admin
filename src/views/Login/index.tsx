import {useState} from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import style  from './style/index.module.scss'
const Login = () =>{

    const [ loginInfo, setLoginInfo ] = useState({
        account:'',
        passward: '',
        code:''
    })

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setLoginInfo(values)
        console.log(loginInfo);
        
    };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div className={style.login}>
            <div className={style.login_box}>
                <div className={style.login_form}>
                <div className={style.title}>
                    登陆
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入账号!' }]}
                        >
                        <Input placeholder='账号' value={loginInfo.account} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                        >
                        <Input.Password placeholder='密码' value={loginInfo.passward} />
                    </Form.Item>

                    <div className={style.check_box}>
                        <Form.Item
                            name="check"
                            rules={[{ required: true, message: '请输入验证码!' }]}
                            >
                            <Input placeholder='验证码' value={loginInfo.code}  />
                        </Form.Item>
                        <div className={style.check_img}>
                            <img height={28} src='/src/assets/images/captcha.png' alt="" />
                        </div>
                    </div>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 6 }}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className={style.form_btn}
                            >
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        </div>
    )
}

export default Login