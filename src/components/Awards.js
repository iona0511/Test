import "../App.scss";

const Awards = ({allAward}) => {
    const { award, text, number, certificate
    } = allAward
    return (<>

        <div className='present'>
            <div className='certificateA'>
                <img src={certificate} alt="" className="certificateImg"/>
                <p className='certificateText'>{award}</p>
            </div>
            <div className='one'>{number}</div>
            <p className='presentText'>{text}</p>
        </div>

    </>);
};

export default Awards;