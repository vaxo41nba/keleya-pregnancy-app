import { useAssets } from 'expo-asset';

import './i18next';
import Navigator from './src/navigation';
import images from './src/constants/images';

export default function App() {
  // Preload images
  const [assets] = useAssets(Object.values(images));

  if (!assets) return null;

  return <Navigator />;
}
