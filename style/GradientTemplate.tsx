import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';

const GradientTemplate = ({ children, headerPadding }: { children: React.ReactNode, headerPadding: boolean }) => {
    //useHeaderHeight is a hook that gives you the height of the header
    const headerHeight = useHeaderHeight();
    
    return (
    <LinearGradient 
    colors={['#000000', '#000000', '#24243e']}
    style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
    >
        {children}
    </LinearGradient>
    )
}

export default GradientTemplate;