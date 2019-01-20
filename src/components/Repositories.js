import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import styled from 'styled-components'

const Repositories = ({ data }) => (
    <Main id='container'>
        {data.items.map((r) => {
            return (
                <div key={r.id}>
                    {data.total_count ?
                    (<List>
                        <ListGroupItem href={`repositories/${r.owner.login}/${r.name}`}><NameList>{r.name}</NameList></ListGroupItem>
                        <ListGroupItem>
                            <User>
                                <Photo
                                    src={r.owner.avatar_url} alt='avatar' />
                                    {r.owner.login}                              
                            </User>
                        </ListGroupItem>
                    </List>)
                    :
                    (<div>Repository not found</div>)}
                </div>
            )
        })}
    </Main>
)

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const List = styled(ListGroup)`
   width: 500px;
`

const NameList = styled.div`
    font-size: 17px;
    font-weight: 700;
    &:hover {
        text-decoration: underline;
    }
`

const User = styled.div`
   display: flex;
   font-size: 15px;
   align-items: center;
`

const Photo = styled.img`       
    height: 75px;
    border-radius: 25%;
    margin-right: 10px;
`

export default Repositories