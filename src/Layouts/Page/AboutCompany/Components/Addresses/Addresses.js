import styled from "styled-components";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses() {
    return (
        <div className='d-flex justify-content-between flex-column pt-4 px-5 gap-2 mt-3 col'>
            <div className='d-inline-flex flex-column gap-4'>
                <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;