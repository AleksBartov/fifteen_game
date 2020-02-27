import React, { useState, useRef, useEffect } from 'react';


function Card({ x, y, value, CARD_WIDTH, gap, moveHandler }) {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const box = useRef(null)
    let direction, module, active; // определяем ось координат движения и модуль ( минус или плюс)

    useEffect(() => {
        if (x === gap.x && y < gap.y) {
            direction = 'Y';
            module = true;
            active = true;
        } else if (x === gap.x && y > gap.y) {
            direction = 'Y';
            module = false;
            active = true;
        } else if (y === gap.y && x < gap.x) {
            direction = 'X';
            module = true;
            active = true;
        } else if (y === gap.y && x > gap.x) {
            direction = 'X';
            module = false;
            active = true;
        }
    }, [gap])

    let start, track, end;

    function touchStart(e) {
        box.current.firstChild.classList.add('shadowDown')
        if (active) {
            start = direction === 'X' ? e.touches[0].pageX : e.touches[0].pageY;
        }
        e.preventDefault();
        return
    }

    function touchMove(e) {
        if (active) {
            track = (direction === 'X' ? e.changedTouches[0].pageX : e.changedTouches[0].pageY) - start;
            if (!module && track > 0) {
                track = 0
            } else if (!module && track < -CARD_WIDTH) {
                track = -CARD_WIDTH
            } else if (module && track < 0) {
                track = 0
            } else if (module && track > CARD_WIDTH) {
                track = CARD_WIDTH
            }
            box.current.style.transform = `translate${direction}(${track + coords.y}px)`
        }
        e.preventDefault();
        return
    }

    function touchEnd(e) {
        box.current.firstChild.classList.remove('shadowDown')
        if (active) {
            if (!module) {
                end = track < -CARD_WIDTH / 2 ? -CARD_WIDTH : 0
            } else {
                end = track > CARD_WIDTH / 2 ? CARD_WIDTH : 0
            }

            box.current.style.transform = `translate${direction}(${end + coords.y}px)`
            moveHandler(value, { x, y }, {
                x: direction === 'Y' ? x : end === 0 ? x : module ? x + 1 : x - 1,
                y: direction === 'X' ? y : end === 0 ? y : module ? y + 1 : y - 1
            });
            setCoords(({ x, y }) => {
                return {
                    x: direction === 'X' ? end : x,
                    y: direction === 'Y' ? end : y
                }
            });
        }
        e.preventDefault();
        return
    }

    return (
        <div ref={box} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}
            className={`Card ${value === 16 ? 'empty' : ''}`}>
            <div className="number">{value}</div>
        </div>
    );
}

export default Card;