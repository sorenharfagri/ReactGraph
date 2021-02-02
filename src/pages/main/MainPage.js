import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { requestGraphData } from '../../stores/actions/graph.actions'
import { goToSignIn } from '../../helpers/RouteUtils'
import AuthService from '../../services/auth.service';
import Chart from "react-apexcharts";

const MainContainer = styled.div`
  background-color: #edf4ff;
`;

const lineGraphOptions = {
    chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            autoSelected: 'zoom'
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Such graph',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        type: 'datetime'
    }
}

const MainPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const graphSeries = useSelector(state => state.graph.data);
    const pieData = useSelector(state => state.graph.pieData);



    useEffect(() => {

        if (!AuthService.isLoggedIn()) {
            goToSignIn(history)
        }

        try {
            dispatch(requestGraphData())
        } catch (e) {
            console.log(`Error in main component, with graph data request`)
            console.log(e)
        }

    }, [])

    return (
        <MainContainer>
            <div id="chart">
                <Chart options={lineGraphOptions} series={graphSeries} type="line" height={600} />
            </div>
            <div id="chart">
                <Chart options={{labels: pieData.labels}} series={pieData.series} type="pie" height={600} />
            </div>
        </MainContainer>
    );
};

export default MainPage;