import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../page/DashBoard'
import BackgroundDemo from '../Demo/Background'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <DashBoard />,
            },
            {
                path: 'bg',
                element: <BackgroundDemo />,
            },
        ],
    },
])

export default router
