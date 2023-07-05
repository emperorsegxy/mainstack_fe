import styles from './dashboardhome.module.css'
import {Button} from "@mui/material";
import DashboardChart from "../DashboardChart.tsx";

export default function DashboardHome () {
    return (
        <>
            <div className={`${styles.dashboardHome}`}>
                <div className="flex justify-between">
                    <div>
                        <h4 className={`text-2xl font-bold`}>Good morning, Blessing ⛅️</h4>
                        <small>Check out your dashboard summary.</small>
                    </div>
                    <div>
                        <Button className="capitalize" variant="text">View Analytics</Button>
                    </div>
                </div>
                <DashboardChart />
            </div>
        </>
    )
}
