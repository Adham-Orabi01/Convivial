import { BsArrowRight } from "react-icons/bs"
import { IoCalendar, IoCalendarOutline } from "react-icons/io5"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"

const DateComponent = ({ startDate, setStartDate, endDate, setEndDate}) => {
    return (
        <div className="date">
            <div className="check-in">
                <IoCalendarOutline className='date-icon' />
                <div className="date-content">
                    <label>Check-In</label>
                    <DatePicker
                     selected={startDate} 
                     onChange={(date) => setStartDate(date)} 
                     selectsStart 
                     startDate={startDate} 
                     endDate={endDate} 
                     placeholderText="Add Date" 
                     dateFormat="MM/dd/yyyy"
                     className="add-date"
                     />
                </div>
            </div>


            <span>
                <BsArrowRight />
            </span>

            <div className="check-out">
                <IoCalendarOutline className='date-icon' />
                <div className="date-content">
                    <label>Check-Out</label>
                    <DatePicker
                     selected={endDate} 
                     onChange={(date) => setEndDate(date)} 
                     selectsEnd 
                     startDate={startDate} 
                     endDate={endDate}
                     minDate={startDate} 
                     placeholderText="Add Date" 
                     dateFormat="MM/dd/yyyy"
                     className="add-date"
                     />
                </div>
            </div>
        </div>
    )
}

export default DateComponent
