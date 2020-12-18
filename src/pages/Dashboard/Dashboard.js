import React from 'react';
import PieChart from 'C:/Users/Liz/Documents/School/4166NetApps/dev/personal-budget-final/src/components/PieChart/PieChart';
import BarChart from 'C:/Users/Liz/Documents/School/4166NetApps/dev/personal-budget-final/src/components/BarChart/BarChart';
import LineGraph from 'C:/Users/Liz/Documents/School/4166NetApps/dev/personal-budget-final/src/components/LineGraph/LineGraph';

function Dashboard() {
    return (
        <main id="main" className="container center">
            <section className="page-area">
                <article className="text-box-long">
                    <h1>Yearly - Line Graph</h1>
                    <p>
                        <LineGraph />
                    </p>
                </article>

                <article className="text-box">
                    <h1>This Month - Bar Chart</h1>
                    <p>
                        <BarChart />
                    </p>
                </article>

                <article className="text-box">
                    <h1>Budget - Pie Chart</h1>
                    <p>
                        <PieChart />
                    </p>
                </article>
            </section>
        </main>
    );
}

export default Dashboard;
