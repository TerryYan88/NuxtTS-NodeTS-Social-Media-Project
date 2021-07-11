import Image from "next/image";
import {PermMedia, Label,Room,EmojiEmotions} from "@material-ui/icons";
import {ShareContainer} from "./style/sharestyle";
import img from "@/public/assets/person/3.jpeg";
const Share = ()=>{

    return (
        <ShareContainer>
            <div className="shareWrapper">
                <div className="shareTop">
                    <Image src={img} alt="img"/>
                    <input className="shareInput" placeholder="What's in your mind Terry?"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </ShareContainer>
    )
}

export default Share;