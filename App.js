import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from "react";
import { Animated, View, PanResponder, Text } from 'react-native';
import { AppLoading } from 'expo';

import fontsLoaded from './AppFont';
import styles from './AppStyle';

export default () => {

	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				setX(pan.x._value);
				setY(pan.y._value);
			},
			onPanResponderMove: (event, gestureState) => {
				setX(gestureState.moveX);
				setY(gestureState.moveY);
			},
			onPanResponderRelease: () => {
				pan.flattenOffset();
			}
		})
	).current;

	if (!fontsLoaded())
		return <AppLoading />;
	else
		return (
		<Animated.View style={styles.container} {...panResponder.panHandlers}>
			<StatusBar style="auto" />
			<Text style={styles.scoreText}>Score Here</Text>
			<View style={styles.board}>
				<View style={styles.innerBoard}>
				</View>
			</View>
			<View>
				<Text>
					{parseInt(x)}, {parseInt(y)}
				</Text>
			</View>
		</Animated.View>
	);
}
