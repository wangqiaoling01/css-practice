import React from 'react'
import styles from './Background.module.scss'

const BackgroundDemo = () => {
    return (
        <>
            <h2>线性渐变</h2>
            <ol className={styles.list}>
                <li className={styles.title}>渐变为透明色</li>
                <div className={styles.transparent}>
                    <ul className={styles.ullist}>
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                    </ul>
                </div>

                <li className={styles.title}>实色过渡</li>
                <div className={styles.demo2}>
                    <div className={styles.demo2_1}></div>
                    <div className={styles.demo2_2}></div>
                </div>

                <li className={styles.title}>渐变叠加多层</li>
                <div className={styles.demo3}>
                    <div className={styles.demo3_1}></div>
                    <div className={styles.demo3_2}></div>
                </div>
            </ol>

            <h2>径向渐变</h2>
            <ol className={styles.list}>
                <li className={styles.title}>基本使用</li>
                <div className={styles.radialBase}></div>

                <li className={styles.title}>预留衔接空间消除渐变产生的锯齿</li>
                <div className={styles.demo_4}>
                    <div className={styles.demo_4_1}></div>
                    <div className={styles.demo_4_2}>颜色连接处有非常明显的锯齿</div>
                    <div className={styles.demo_4_3}>在衔接处，适当留出一些渐变空间</div>
                </div>

                <li className={styles.title}>利用多层渐变组合图形</li>
                <div className={styles.demo_5}>
                    <div className={styles.demo_5_1}></div>
                    <p className={styles.demo_5_2}>渐变实现波浪</p>
                    <div className={styles.demo_5_3}>Hover Me</div>
                    <div className={styles.demo_5_4}>50</div>
                    <div className={styles.demo_5_5}>50</div>
                </div>
            </ol>
        </>
    )
}

export default BackgroundDemo
