import React from 'react'
import {Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (e) =>{
    // 제출 방지
    e.preventDefault();
    setAuthenticate(true);
    console.log("login user function issue");
    navigate("/");
  }
  return (
    <Container className='login-container'>
       <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"/>   
      <h3 className='loginTitle'>H&M에 오신 것을 환영합니다!</h3>
        <Form onSubmit={(e)=>{loginUser(e)}} className='login-form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일:</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력해주세요."  className='emailInput'/>
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호를 입력해주세요." className='passwordInput'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <div className='btn-area'>
            <Button variant="warning" type="submit">
              로그인
            </Button>
          </div>
      </Form>
    </Container>
  )
}

export default Login