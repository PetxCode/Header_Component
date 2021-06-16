import React, {useState} from 'react'
import styled from 'styled-components'
import { CgMenu } from 'react-icons/cg';



const HeaderComponent = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
    <Container>
      <Logo src="/images/8.png" />
    
      <Wrapper>
        
        <a>
          <img src="/images/home-icon.svg"  />
          <span>Home</span>
        </a>

        <a>
          <img src="/images/search-icon.svg"  />
          <span>search</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg"  />
          <span>movies</span>
        </a>

        <a>
          <img src="/images/series-icon.svg"  />
          <span>series</span>
        </a>

        <a>
          <img src="/images/original-icon.svg"  />
          <span>original</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg"  />
          <span>watchlist</span>
        </a>
      </Wrapper>

      <UserAvatar>
        <img src="/images/44.jpg" />
        <span>LogOut</span>
      </UserAvatar>
    
     
      <Menu
      onClick={handleShow}
      />
    </Container>

 
    {
        show ? (
          <>
          <SubMenu
          onClick={()=>{setShow(!show)}}
          >
            
        <a>
          <img src="/images/home-icon.svg"  />
          <span>Home</span>
        </a>

        <a>
          <img src="/images/search-icon.svg"  />
          <span>search</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg"  />
          <span>movies</span>
        </a>

        <a>
          <img src="/images/series-icon.svg"  />
          <span>series</span>
        </a>

        <a>
          <img src="/images/original-icon.svg"  />
          <span>original</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg"  />
          <span>watchlist</span>
        </a>

        <SubUser>
            <img src="/images/44.jpg" />
            <span>LogOut</span>
          </SubUser>
      </SubMenu>
         
        </>
        ): null
      }
    </>
  )
}

export default HeaderComponent

const SubUser = styled.div`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;

  img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
    border: 2px solid white;
  }

  span{
    font-size: 15px;
    font-weight: bold;
  }

`

const SubMenu = styled.div`
  display: none;

  @media screen and (max-width: 786px){
    width: 250px;
    height: 60%;
    background-color: #090b13;
    float: right;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  a{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 30px;
    
 

  img{
    width: 30px;
    height: 30px;
    object-fit: 15px;
    opacity: 0.4;
    transition: all 350ms;
    
    }

    span{
      margin-left: 30px;
      text-transform: uppercase;
      font-weight: bold;
      color: rgba(249, 249, 249, 0.6);
    }

    &:hover{
      cursor: pointer;
      span{
        color: white;
      }
      img{
        opacity: 1;
      }
    }
   }
  }


`

const Menu = styled(CgMenu)`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    font-size: 30px;
    padding-right: 30px;
    cursor: pointer;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: flex;
    width: 100wv;
    justify-content: space-between;
  }

`

const Logo = styled.img`
width: 100px;
height: 40px;
object-fit: contain;
cursor: pointer;
margin-left: 30px;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%; 
cursor: pointer;
margin-left: 20px;
flex: 1;


a{
  display: flex;
  align-items: center;
  height: 100%; 
  position: relative;
  margin-left: 20px;

  img{
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.1px
    position: relative;


    &:after{
      content:"";
      position: absolute;
      height: 2px;
      background-color: white;
      right: 0;
      left: 20px;
      bottom: 20px;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    }
  }

  &:hover{
    span:after {
      opacity: 1;
      transform: scaleX(1.06)
    }
  }
}

@media screen and (max-width: 768px){
  display: none;
}
`

const UserAvatar = styled.div`
width: 50px;
height: 70px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;
padding-right: 30px; 
cursor: pointer;

img{
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 25px;
}

span{
  font-size: 10px;
  font-weight: bold;
  opacity: 0;
  transition: all 350ms;

}

&:hover{
  span{
    opacity: 1;
  }
}


@media screen and (max-width: 768px){
  display: none;
}
`