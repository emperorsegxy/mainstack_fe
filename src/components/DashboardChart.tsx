import {useEffect, useState} from "react";
import {Tabs, Tab, Button, Icon} from "@mui/material";
import axios from "axios";
import ReactApexChart from 'react-apexcharts'
import NigerianFlagIcon from "./icons/NigerianFlagIcon.tsx";
import GermanFlagIcon from "./icons/GermanFlagIcon.tsx";
import GhanaFlag from "./icons/GhanaFlag.tsx";
import FinlandFlagIcon from "./icons/FinlandFlagIcon.tsx";
import UKFlagIcon from "./icons/UKFlagIcon.tsx";
import GoogleIcon from "./icons/GoogleIcon.tsx";
import InstagramIcon from "./icons/InstagramIcon.tsx";
import FacebookIcon from "./icons/FacebookIcon.tsx";
import LinkedInIcon from "./icons/LinkedInIcon.tsx";
const URL = 'https://fe-task-api.mainstack.io/'

export default function DashboardChart () {
    const [selectedDays, setSelectedDays] = useState('All_Time')
    const [data, setData] = useState({})
    const [lineSeries, setLineSeries] = useState([])
    const [locationsSeries, setLocationSeries] = useState([])
    const [locationsOptions, setLocationsOptions] = useState({
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                customScale: 0.6
            }
        },
        labels: [],
        colors: ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468']
    })
    const [referralsSeries, setReferralsSeries] = useState([])
    const [referralsOptions, setReferralsOptions] = useState({
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                customScale: 0.6
            }
        },
        labels: [],
        colors: ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A']
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await axios.get(URL)
                setData(res.data)
            } catch (e: any) {
                console.error({e})
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (Object.keys(data).length) {
            const series = Object.entries((data as any).graph_data.views).map(([x, y]) => ({x,y}))
            // @ts-ignore
            setLineSeries([{
                data: series
            }])
            // Top Locations
            setLocationsOptions({
                ...locationsOptions,
                // @ts-ignore
                labels: (data as any).top_locations.map((location: {country: string}) => location.country)
            })
            setLocationSeries((data as any).top_locations.map((location: {count: string}) => location.count))
            // Top Referrals
            setReferralsOptions({
                ...locationsOptions,
                // @ts-ignore
                labels: (data as any).top_sources.map((referral: {source: string}) => referral.source)
            })
            setReferralsSeries((data as any).top_sources.map((source: {count: string}) => source.count))
        }
    }, [data])
    const days = [
        {
            text: '1 Day',
            value: '1'
        },
        {
            text: '3 Days',
            value: '3'
        },
        {
            text: '7 Days',
            value: '7'
        },
        {
            text: '30 Days',
            value: '30'
        },
        {
            text: 'All Time',
            value: 'all'
        },
        {
            text: 'Custom Date',
            value: 'custom'
        }
    ]
    const tabsWrapperOverride = {
        minHeight: '40px',
        maxHeight: '40px',
        '& .MuiTabs-indicator': {
            height: '100%',
            background: '#FFEEE5',
            border: '1px solid #FF5403',
            borderRadius: '100px',
            zIndex: 1
        }
    }

    const tabStylesOverride = {
        zIndex: 2,
        minHeight: '40px',
        height: '40px',
        '&:not(.Mui-selected)': {
            border: '1px solid #EFF1F6',
            borderRadius: '100px'
        }
    }

    const lineOptions: any = {
        chart: {
            type: 'area',
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: 'straight'
        },
        colors: ['#FF5403'],
        xaxis: {
            type: 'datetime',
            formatter: function(value: string, timestamp: number, opts: any) {
                console.log(value)
                return opts.dateFormatter(new Date(timestamp) as any as number).format("dd/MM")
            },
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yy",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9
            }
        },
        dataLabels: {
            enabled: false,
        },
    }
    const icons: Record<string, () => JSX.Element> = {
        Nigeria: NigerianFlagIcon,
        Germany: GermanFlagIcon,
        Ghana: GhanaFlag,
        Finland: FinlandFlagIcon,
        "United Kingdom": UKFlagIcon,
        google: GoogleIcon,
        instagram: InstagramIcon,
        facebook: FacebookIcon,
        linkedin: LinkedInIcon
    }

    return (
        <>
            <div className="days-filter mt-6">
                <Tabs
                    onChange={(e, v) => {
                        e.preventDefault()
                        setSelectedDays(v)
                    }}
                    sx={tabsWrapperOverride}
                    value={selectedDays}>
                    {days.map((day, i) => (<Tab sx={tabStylesOverride} className={`capitalize mr-3 font-semibold`} key={i} value={day.text.split(/\s/).join('_')} label={day.text}/>))}
                </Tabs>
            </div>
            <div className="my-6">
                <div className="card-container">
                    <div className="flex justify-between mb-2">
                        <div>
                            <h6 className={`font-bold`}>Page Views</h6>
                            <small>{selectedDays.split('_').join(' ')}</small>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_703_2282" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                <rect width="20" height="20" fill="#C4C4C4"/>
                            </mask>
                            <g mask="url(#mask0_703_2282)">
                                <path d="M9.58333 13.75H10.4167V9.16667H9.58333V13.75ZM10 7.97917C10.1389 7.97917 10.2606 7.93056 10.365 7.83333C10.4689 7.73611 10.5208 7.61111 10.5208 7.45833C10.5208 7.31944 10.4689 7.20139 10.365 7.10417C10.2606 7.00694 10.1389 6.95833 10 6.95833C9.86111 6.95833 9.73944 7.00694 9.635 7.10417C9.53111 7.20139 9.47917 7.31944 9.47917 7.45833C9.47917 7.61111 9.53111 7.73611 9.635 7.83333C9.73944 7.93056 9.86111 7.97917 10 7.97917ZM10 17.5C8.95833 17.5 7.97917 17.3056 7.0625 16.9167C6.14583 16.5278 5.35083 15.9967 4.6775 15.3233C4.00361 14.6494 3.47222 13.8542 3.08333 12.9375C2.69444 12.0208 2.5 11.0417 2.5 10C2.5 8.95833 2.69444 7.97917 3.08333 7.0625C3.47222 6.14583 4.00361 5.35056 4.6775 4.67667C5.35083 4.00333 6.14583 3.47222 7.0625 3.08333C7.97917 2.69444 8.95833 2.5 10 2.5C11.0417 2.5 12.0208 2.69444 12.9375 3.08333C13.8542 3.47222 14.6494 4.00333 15.3233 4.67667C15.9967 5.35056 16.5278 6.14583 16.9167 7.0625C17.3056 7.97917 17.5 8.95833 17.5 10C17.5 11.0417 17.3056 12.0208 16.9167 12.9375C16.5278 13.8542 15.9967 14.6494 15.3233 15.3233C14.6494 15.9967 13.8542 16.5278 12.9375 16.9167C12.0208 17.3056 11.0417 17.5 10 17.5ZM10 16.6667C11.8472 16.6667 13.4203 16.0175 14.7192 14.7192C16.0175 13.4203 16.6667 11.8472 16.6667 10C16.6667 8.15278 16.0175 6.57972 14.7192 5.28083C13.4203 3.9825 11.8472 3.33333 10 3.33333C8.15278 3.33333 6.58 3.9825 5.28167 5.28083C3.98278 6.57972 3.33333 8.15278 3.33333 10C3.33333 11.8472 3.98278 13.4203 5.28167 14.7192C6.58 16.0175 8.15278 16.6667 10 16.6667Z" fill="#31373D"/>
                            </g>
                        </svg>
                    </div>
                    <div><h3 className={`text-3xl font-bold`}>500</h3></div>
                    {isLoading && 'Fetching data...'}
                    <ReactApexChart type="area" series={lineSeries}
                                    options={lineOptions} />
                </div>
                <div className="flex flex-wrap mt-6">
                    <div className="card-container flex-1 mr-3 mb-6">
                        <div className="flex justify-between items-center">
                            <h5 className={`font-bold`}>Top Locations</h5>
                            <Button className="normal-case" variant="text">View full reports</Button>
                        </div>
                        <div className={`flex justify-between items-center mt-9`}>
                            <div>
                                {[...locationsOptions.labels, 'Others'].map((label: string, index, labels) =>
                                    (<div key={index} className={`mb-4 flex items-center`}>
                                        <Icon component={icons[label]} />
                                        <span className={`ml-2 mr-1 whitespace-nowrap`}>{label}</span>
                                        <span className={`font-semibold mr-3`}>{locationsSeries[index]}{index !== labels.length - 1 && '%'}</span>
                                        <span className={`inline-block`} style={{background: locationsOptions.colors[index], width: '12px', height: '12px', borderRadius: '100px'}} />
                                    </div>))}
                            </div>
                            <ReactApexChart type="donut" options={locationsOptions} series={locationsSeries} />
                        </div>
                    </div>
                    <div className="card-container flex-1 mb-6">
                        <div className="flex justify-between items-center">
                            <h5 className={`font-bold`}>Top Referrals</h5>
                            <Button className="normal-case" variant="text">View full reports</Button>
                        </div>
                        <div className={`flex justify-between items-center mt-9`}>
                            <div>
                                {[...referralsOptions.labels, 'Others'].map((label: string, index, labels) => (
                                    <div key={index} className={`mb-4 flex items-center`}>
                                        <Icon component={icons[label]} />
                                        <span className={`ml-2 mr-1 whitespace-nowrap capitalize`}>{label}</span>
                                        <span className={`font-semibold mr-3`}>{referralsSeries[index]}{index !== labels.length - 1 && '%'}</span>
                                        {index !== labels.length - 1 && <span className={`inline-block`} style={{background: referralsOptions.colors[index], width: '12px', height: '12px', borderRadius: '100px'}} />}
                                    </div>
                                ))}
                            </div>
                            <ReactApexChart type="donut" options={referralsOptions} series={referralsSeries} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
