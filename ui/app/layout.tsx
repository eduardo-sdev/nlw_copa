type Props = {
    children: React.ReactNode
}

import '../styles/globals.css'

const LayoutRoot = ({children}:Props) => {
    return <html>
        <head>
            <title>nlw copa</title>
        </head>
        <body>
            {children}
        </body>
    </html>
}

export default LayoutRoot

