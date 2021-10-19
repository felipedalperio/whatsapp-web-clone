import React,{useState,useEffect} from "react";
import './newChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../Api';

export default ({user,chatList,show,setShow}) =>{

    const  [ list, setList] = useState([]);

    useEffect(() =>{
        const getList = async () =>{
            if(user !== null){
                //pegando a lista de contatos:
                let results = await Api.getContatoList(user.id);
                //e ai sim voce pode colocar na list que exibe :
                setList(results);
            }
        }
        getList();
    }, [user]);

    const handleClose= () =>{
        setShow(false);
    }

    const addNewChat = async (user2) =>{
            await Api.addNewChat(user,user2);
            handleClose();
    }

    return (
        <div className="newChat" style={{left: show?0:-415}}>
                <div className="newChat--head">
                    <div onClick={handleClose} className="newChat--backbutton">
                                <ArrowBackIcon style={{color: '#FFFFFF'}} />
                    </div>
                    <div className="newChat--headtitle">Nova Conversa</div>
                </div>
                <div className="newChat--list">
                        { list.map((item, key) =>(
                                <div onClick={( )=>addNewChat(item)} className="newChat--item" key={key}>
                                        <img className="newChat--itemAvatar" src={item.avatar} alt=""/>
                                        <div className="newChat--itemname">{item.name}</div>
                                </div>
                        ))}
                </div>
        </div>
    )
}