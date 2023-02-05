import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
import styled from "styled-components";


function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex row mt-1'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;