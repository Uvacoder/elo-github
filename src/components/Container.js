import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import styled from 'styled-components'

const Container = ({ data }) => (
    <Main id='container'>
        {data.items.map((r) => {
            return (
                <div key={r.id}>
                    {data.total_count ?
                    (<List>
                        <ListGroupItem>{r.name}</ListGroupItem>
                        <ListGroupItem><a href={r.html_url} target='blank'>{r.html_url}</a></ListGroupItem>
                        <ListGroupItem>
                            <User>
                                <Photo src={r.owner.avatar_url} alt='avatar' /> {r.owner.login}
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
    justify-content: space-between;
    width: 1024px;
`

const List = styled(ListGroup)`
   width: 500px;
`

const User = styled.div`
   display: flex;
`

const Photo = styled.img`       
    height: 75px;
    border-radius: 25%;
`

export default Container