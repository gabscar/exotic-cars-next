import React,{useState} from "react";
import { ButtonsContainer, 
    CarFilterContainer, 
    DataContainer, 
    DateInput, 
    FristLogoText, 
    HeaderContainer, 
    LocationContainer, 
    LocationInput, 
    LoginBtn, 
    LogoContainer, 
    SearchBtn, 
    SecondLogoText, 
    SignUpBtn } from "./styles";
import { GoLocation,GoCalendar,GoSearch } from "react-icons/go";
import { ImLocation2 } from "react-icons/im";
import Link from 'next/link'
import Image from 'next/image'

const Header : React.FC = ()=>{
    const [initialDate, setInitialDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());
    return (
        <HeaderContainer>
            <Link href='/'>
                <a>
                    <LogoContainer>
                        <FristLogoText>EXOTIC</FristLogoText>
                        <SecondLogoText>CARS</SecondLogoText>
                    </LogoContainer>
                </a>
            </Link>
            
            <CarFilterContainer>
                <LocationContainer>

                    <ImLocation2 className="location-icon"size={20} color="#C4C4C4"/>
                    <LocationInput/>
                    
                        
                </LocationContainer>
                <DataContainer>
        
                    <DateInput
                        onChange={setInitialDate}
                        value={initialDate}
                        clearIcon={null}
                        calendarIcon={<GoCalendar/>}
                    />
                    <DateInput
                        onChange={setFinalDate}
                        value={finalDate}
                        clearIcon={null}
                        calendarIcon={<GoCalendar/>}
                    />
                    <SearchBtn className="SearchBtn">
                        <GoSearch size={20} color="#7B89F4"/>
                    </SearchBtn>
                </DataContainer>
                
            </CarFilterContainer>
            <ButtonsContainer>
        
                <SignUpBtn>Sign up</SignUpBtn>
                <LoginBtn>Sign in</LoginBtn>
            </ButtonsContainer>
            
        </HeaderContainer>
    )
}

export default Header;