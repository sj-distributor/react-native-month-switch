import React, {
  useRef,
  Fragment,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import XDate from 'xdate';
import PropTypes from 'prop-types';
import {
  dateToStringFormat,
  parseDate,
  isSameMonth,
  dateResource,
  isLeftMonthBig,
} from './utils';
import Style from './style';
import type { Direction, IMonthSwitchProps, IMonthSwitchRef } from './types';

const MonthSwitch = forwardRef<IMonthSwitchRef, IMonthSwitchProps>(
  (props, ref) => {
    const {
      format,
      maxDate,
      onChange,
      initValue,
      arrowStyle,
      onLeftArrow,
      onRightArrow,
      renderCustomArrow,
    } = props;

    const styles = useRef(Style());
    const isMounted = useRef(false);

    useImperativeHandle(ref, () => ({
      reset: () => reset(),
    }));

    const [currentMonth, setCurrentMonth] = useState(
      initValue ? parseDate(initValue) : new XDate()
    );

    useEffect(() => {
      if (initValue) {
        setCurrentMonth(parseDate(initValue));
      }
    }, [initValue]);

    useEffect(() => {
      if (isMounted.current) {
        onChange && onChange(dateResource(currentMonth));
      } else {
        isMounted.current = true;
      }
    }, [currentMonth, onChange]);

    const updateCurrentMonth = useCallback(
      (newMonth: XDate) => {
        if (isSameMonth(newMonth, currentMonth)) {
          return;
        }

        setCurrentMonth(newMonth);
      },
      [currentMonth]
    );

    const updateMonth = useCallback(
      (count: number, onArrowChange?: (date: string) => void) => {
        const newMonth = currentMonth.clone().addMonths(count, true);

        if (maxDate && isLeftMonthBig(newMonth, new XDate(maxDate))) {
          updateCurrentMonth(newMonth);

          onArrowChange && onArrowChange(dateToStringFormat(newMonth));
        }
      },
      [currentMonth, maxDate, updateCurrentMonth]
    );

    const _onLeftArrow = useCallback(() => {
      updateMonth(-1, onLeftArrow);
    }, [onLeftArrow, updateMonth]);

    const _onRightArrow = useCallback(() => {
      updateMonth(1, onRightArrow);
    }, [onRightArrow, updateMonth]);

    const reset = useCallback(() => {
      setCurrentMonth(initValue ? parseDate(initValue) : new XDate());
    }, [initValue]);

    const renderArrow = (direction: Direction) => {
      const isLeft = direction === 'left';
      const ArrowDirection = isLeft ? 'left' : 'right';
      const arrowImage = isLeft
        ? require('./images/left.png')
        : require('./images/right.png');

      const onPress = isLeft ? _onLeftArrow : _onRightArrow;

      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.current.arrow, arrowStyle]}
          hitSlop={styles.current.arrowHitSlop}
        >
          {renderCustomArrow ? (
            renderCustomArrow(ArrowDirection)
          ) : (
            <Image source={arrowImage} style={styles.current.arrowImage} />
          )}
        </TouchableOpacity>
      );
    };

    const renderDate = () => {
      return (
        <Fragment>
          <Text allowFontScaling={false} style={styles.current.dateText}>
            {currentMonth.toString(format)}
          </Text>
        </Fragment>
      );
    };

    return (
      <View style={styles.current.container} accessibilityRole={'adjustable'}>
        {renderArrow('left')}
        <View style={styles.current.dateContainer}>{renderDate()}</View>
        {renderArrow('right')}
      </View>
    );
  }
);

export default MonthSwitch;
MonthSwitch.displayName = 'MonthSwitch';
MonthSwitch.propTypes = {
  format: PropTypes.string,
  onChange: PropTypes.func,
  maxDate: PropTypes.string,
  initValue: PropTypes.string,
  onLeftArrow: PropTypes.func,
  onRightArrow: PropTypes.func,
  arrowStyle: PropTypes.object,
  renderCustomArrow: PropTypes.func,
};
MonthSwitch.defaultProps = {
  format: 'yyyy-MM',
};
