import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    
    const dispatch = useDispatch()
    const {userState} = useSelector(state => state.userJSON)

    return (
        <div>
            {
                userState.length > 0 && <Menu.Item>
                <Image avatar spaced="right" src={userState[0].imgUrl}/>
                <Dropdown pointing="top left" text={userState[0].username}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            }
        </div>
    )
}

