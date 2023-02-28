import { faBell, faCalendar, faCalendarDays, faChevronDown, faClockFour } from '@fortawesome/free-solid-svg-icons';
import { InterfaceLinks } from '../interface/links';

export const links: InterfaceLinks[] = [
    {
        title: "Features",
        icon: faChevronDown,
        modalLinks: [
            {
                icon: faCalendarDays,
                title: "Todo List",
                color: "#3f51b5"
            },
            {
                icon: faCalendar,
                title: "Calendar",
                color: "#03a9f4"
            },
            {
                icon: faBell,
                title: "Reminders",
                color: "#cddc39"
            },
            {
                icon: faClockFour,
                title: "Planning",
                color: "hsl(266deg 75% 44%)"
            }
        ]
    },
    {
        title: "Company",
        icon: faChevronDown,
        modalLinks: [
            {
                title: "History"
            },
            {
                title: "Our Team"
            },
            {
                title: "Blog"
            }
        ]
    },
    {
        title: "Carrers",
    },
    {
        title: "About",
    }
]