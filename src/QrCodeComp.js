import './QrCodeComp.css'

function QrCodeComp() {
    return (
        <section className="qrcode">
            <div className="card">
                <img
                    className="imagem-qrcode"
                    src="image-qr-code.png"
                    alt="QR Code"
                />
                <div className="texto">
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </section>
    )
}

export default QrCodeComp