import LinearGradient from 'react-native-linear-gradient';

const GradientTemplate = ({ children, headerPadding }: { children: React.ReactNode, headerPadding: boolean }) => {
    
    return (
    <LinearGradient 
    colors={['#000000aa', '#00000088', '#24243e88']}
    style={{ flex: 1, paddingTop: headerPadding ? 0 : 0 }}
    >
        {children}
    </LinearGradient>
    )
}

export default GradientTemplate;