// App.js - React Frontend

import React, { useState, useEffect } from 'react';

const Dashbord= () => {
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        // Fetch dashboard data from the PHP backend
        fetch('http://localhost/ADMIN_PANEL/login_form.php', { method: 'GET' })
            .then(response => response.json())
            .then(data => setDashboardData(data))
            .catch(error => console.error('Error fetching dashboard data:', error));
    }, []);
    return (
        <div>
            {dashboardData ? (
                <>
                    <h2>Welcome, {dashboardData.user}!</h2>
                    <p>Total Users: {dashboardData.statistics.total_users}</p>
                    <p>Active Users: {dashboardData.statistics.active_users}</p>
                    <p>Inactive Users: {dashboardData.statistics.inactive_users}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashbord;
