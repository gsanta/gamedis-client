import 'react-reflex/styles.css';
import 'antd/dist/antd.css';
import '../src/app.scss'
import '../src/features/sprite/sprite.scss';
import '../src/features/palette/palette.scss';
import '../src/components/canvas/canvas.scss';
// import '../src/components/canvas.scss';
if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../msw_mock_api/mocks')
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
