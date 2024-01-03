import { requireNativeComponent } from 'react-native';

/**
 * Composes `View`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 */

interface Props {
    style: { height: number, width: number }
    src: [{ uri: string }]
    borderRadius: number
}

const ImageViewComponent = (props: Props) => {
    return <ImageView {...props} />
}

const ImageView = requireNativeComponent('MapboxNavigation');

export default ImageViewComponent