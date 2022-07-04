import React, {useState} from "react";
import * as forCalendar from './forCalendar';
import moment from "moment";



const Calendar=({doctors})=> {
    const date = new Date();
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const [calendar, setCalendar] = useState({
        date: date,
        currentDate: new Date(),
        selectedDate: null,
    });

    const month=calendar.date.getMonth();
    const year=calendar.date.getFullYear();
    const day=calendar.date.getDate();
    const currentMonth=monthNames[month];
    const monthData=forCalendar.getMonthData(year,month,day);

    const handlePrevMonth=()=>{
        let date=new Date(year, month-1);
        setCalendar({date})
    };
    const handleNextMonth=()=>{
        let date=new Date(year, month+1);
        setCalendar({date})
    };


    const entryInDay=(date)=> {
        let flag = null;
        for (let i = 0; i < doctors.length; i++) {
            if (Number(moment(doctors[i].data).format('M')) === month + 1 && Number(moment(doctors[i].data).format('D')) === date.getDate()) {
                flag ++;
            }
        }
        return flag
    };


    return (
        <section className="calendar">
                <div className="calendar__header">
                    <div className="header__wrapper">
                        <div className="arrow__back" onClick={handlePrevMonth}>
                            <img src={require('../img/arrow__back.png')}/>
                        </div>
                        <div className="current__month">{currentMonth}, {year}</div>
                        <div className="arrow__next" onClick={handleNextMonth}>
                            <img src={require('../img/arrow__next.png')}/>
                        </div>
                    </div>
                </div>
            <div className="table__wrapper">
            <table>
                <thead>
                <tr>
                    {weekDays.map(name =>
                        <th key={name}>{name}</th>
                    )}
                </tr>
                </thead>

                <tbody className="calendar__body">
                {monthData.map((week, index) =>
                    <tr key={index} className="week">
                        {week.map((date, index) =>date ?
                            <td
                                className={
                                    `day ${(date.getDate()<new Date().getDate() && calendar.date.getMonth()===new Date().getMonth() || calendar.date.getMonth()<new Date().getMonth())
                                    && 
                                    'day__active'}`}
                                key={index}
                                >

                                <div className="numberOfDay">{date.getDate()}
                                     {entryInDay(date) && <div className="circle">{entryInDay(date)}</div> }
                                </div>
                            </td>
                            :
                            <td key={index}/>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </section>
    )
};
export default Calendar;