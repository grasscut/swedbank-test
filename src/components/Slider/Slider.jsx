import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';
import { monetaryFormat } from '../../helpers';

export default ({ max, min, name, onChange = () => {}, label = '', step = 1 }) => {
    const _slider = useRef();
    const _tooltip = useRef();

    const [value, setValue] = useState(min);

    const getPercentage = (value) => {
        return ((value - min) / (max - min)) * 100;
    };

    const getThumbStyle = () => {
        const percentageValue = getPercentage(value);

        return {
            left: `calc(${percentageValue}% - 6px)`,
        };
    };

    const getTooltipStyle = () => {
        if (_tooltip.current) {
            const { clientWidth } = _tooltip.current;
            const percentageValue = getPercentage(value);

            if (percentageValue < 5) {
                return {
                    left: 0,
                };
            }

            if (percentageValue > 95) {
                return {
                    right: 0,
                };
            }

            return {
                left: `calc(${percentageValue}% - ${clientWidth / 2}px)`,
            };
        }

        return {};
    };

    const drag = (ev) => {
        const { clientX } = ev.touches ? ev.touches[0] : ev;
        const sliderLocation = _slider.current.getBoundingClientRect();
        const valueInPixel = (+max - +min) / sliderLocation.width;
        const newValue = +min + (clientX - sliderLocation.left) * valueInPixel;

        if (newValue < min) {
            setValue(min);
        } else if (newValue > max) {
            setValue(max);
        } else {
            setValue(Math.ceil((newValue / step)) * step);
        }
    };

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <div className="sliderGroup">
            <label htmlFor={name} className="sliderGroup__label">{label}</label>
            <div className="sliderGroup__sliderWrapper">
                <div ref={_tooltip} className="sliderGroup__tooltip" style={getTooltipStyle()}>
                    {`${monetaryFormat(value)} €`}
                </div>
                <div className="sliderGroup__range">
                    <div ref={_slider} className="sliderGroup__slider" />
                    <div
                        className="sliderGroup__thumb"
                        onMouseDown={() => {
                            document.onmousemove = drag;
                            document.onmouseup = () => document.onmousemove = null;
                        }}
                        onTouchMove={drag}
                        style={getThumbStyle()}
                    />
                    <div className="sliderGroup__value" style={{ width: `${getPercentage(value)}%` }} />
                </div>
                <div className="sliderGroup__rangeLabels">
                    <span>{`${monetaryFormat(min)} €`}</span>
                    <span className="float-right">{`${monetaryFormat(max)} €`}</span>
                </div>
            </div>

            <input name={name} value={value} readOnly />
        </div>
    );
};
