import React from 'react';
import './FAQ.css';

function FAQ() {
    return (
        <div className='container'>
            <h4 className='mt-4'>Frequently asked quetions</h4>
            <div className='container my-5'>
                <h6 className='my-2'>1. How are cryptocurrencies taxed in Australia?</h6>
                <p>The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.</p>
</div>
            <div className='container my-5'>
                <h6 className='my-2'>2. What’s the difference between long-term and short-term capital gains?</h6>
                <p>The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.</p>
            </div>
            <div className='container my-5'>
                <h6 className='my-2'>4. Do I have to pay tax on crypto-to-crypto transactions?</h6>
                <p>Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.

Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free.
</p>
            </div>
            <div className='container my-5'>
                <h6 className='my-2'>5. Can the ATO track crypto?</h6>
                <p>The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.

</p>
            </div>

        </div>
    )
}

export default FAQ
