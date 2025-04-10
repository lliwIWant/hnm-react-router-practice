import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({authenticate,setAuthenticate}) => {

    const menuList = ['여성', 'Divided', "남성",'신생아/유아', '아동','H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();

    const goToHome=() =>{
        navigate('/');
    }
    const goToLogin = ()=>{
        navigate("/login");
    }
    const goToLogout =()=>{
        setAuthenticate(false);
        navigate("/");
    }

    const search = (e) =>{
        if(e.key ==="Enter"){
            // console.log("we click this key", event.key);
            // 입력한 검색어를 읽어와서
            let keyword = e.target.value
            console.log(keyword);
            //url을 바꿔준다.

            navigate(`/?q=${keyword}`);
            
        }
        // console.log('asdfasdf')
    }
    const siedMenu = ()=>{
        console.log("asdf");
        document.querySelector(".menuBack").classList.toggle("active");
        document.querySelector(".menuSlide").classList.toggle("active");

    }
    const clickBack = ()=>{
        

        
        document.querySelector(".menuBack").classList.toggle("active");
        document.querySelector(".menuSlide").classList.toggle("active");

    }
  return (
    <div>
        <div>
            
            <div className="login-button">
                <div className='search-area'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
                        <input type="text" onKeyUp={(e)=>{search(e)}}/>
                </div>
                {authenticate?(
                    <div className='login-wrap' onClick={goToLogout} >
                           <div className='loginIcon' >
                                <img width="100%" src='https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1390/S1668649215228.jpg'/>
                            </div>
                            <div>로그아웃</div>
                    </div>
                ):(
                    <div className='login-wrap'  onClick={goToLogin}>
                        <div className='loginIcon' >
                            <FontAwesomeIcon icon={faUser}  />
                        </div>
                        <div>로그인</div>
                    </div>
                )}
            </div>
        </div>

        <div className='nav-section' >
            <div className='menu-btn' onClick={siedMenu}><FontAwesomeIcon icon={faBars} /></div>
            <img width={100} onClick={goToHome}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"/>    
        </div>
        <div className='menuBack' onClick={clickBack}>
            <div className='menuSlide' onClick={e => e.stopPropagation()}>
                <ul className='side'>
                    {menuList.map(menu=>(
                            
                            <li>{menu}</li>
                        )
                    )}
                </ul>
            </div>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=>(
                    
                        <li>{menu}</li>
                    )
                )}
            </ul>
            {/* <div className='search-area'>
                 <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
                 <input type="text" onKeyUp={(e)=>{search(e)}}/>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar;