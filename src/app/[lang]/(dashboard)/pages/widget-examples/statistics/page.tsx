// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Horizontal from '@views/pages/widget-examples/statistics/Horizontal'
import Characters from '@views/pages/widget-examples/statistics/Characters'
import Vertical from '@views/pages/widget-examples/statistics/Vertical'
import BarChart from '@views/pages/widget-examples/statistics/BarChart'
import LineChart from '@views/pages/widget-examples/statistics/LineChart'
import RadialBarChart from '@views/pages/widget-examples/statistics/RadialBarChart'
import StackedBarChart from '@views/pages/widget-examples/statistics/StackedBarChart'
import SmoothLineChart from '@views/pages/widget-examples/statistics/SmoothLineChart'
import DonutChart from '@views/pages/widget-examples/statistics/DonutChart'
import SalesProfit from '@views/pages/widget-examples/statistics/SalesProfit'
import TotalVisits from '@views/pages/widget-examples/statistics/TotalVisits'
import SalesMonth from '@views/pages/widget-examples/statistics/SalesMonth'
import OrdersImpressions from '@views/pages/widget-examples/statistics/OrdersImpressions'
import WeeklySales from '@views/pages/widget-examples/statistics/WeeklySales'
import MarketingSales from '@views/pages/widget-examples/statistics/MarketingSales'
import WeeklySalesBg from '@views/pages/widget-examples/statistics/WeeklySalesBg'
import Sales from '@views/pages/widget-examples/statistics/Sales'
import LiveVisitors from '@views/pages/widget-examples/statistics/LiveVisitors'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Data Imports
import { getStatisticsData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/pages/widget-examples` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getStatisticsData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch statisticsData')
  }

  return res.json()
} */

const Statistics = async () => {
  // Vars
  const data = await getStatisticsData()
  const serverMode = getServerMode()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Horizontal data={data.statsHorizontal} />
      </Grid>
      <Grid item xs={12}>
        <Characters data={data.statsCharacter} />
      </Grid>
      <Grid item xs={12}>
        <Vertical data={data.statsVertical} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4} lg={2}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <LineChart serverMode={serverMode} />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <RadialBarChart serverMode={serverMode} />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <StackedBarChart serverMode={serverMode} />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <SmoothLineChart />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <DonutChart serverMode={serverMode} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <SalesProfit />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TotalVisits />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SalesMonth />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OrdersImpressions />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklySales />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingSales />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklySalesBg />
      </Grid>
      <Grid item xs={12} md={6}>
        <Sales />
      </Grid>
      <Grid item xs={12} md={6}>
        <LiveVisitors />
      </Grid>
    </Grid>
  )
}

export default Statistics
