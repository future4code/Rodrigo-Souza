import React from "react";
import styled from "styled-components";
import axios from "axios";


const Div2 = styled.div `
    background-color: lightblue;
    width: 100%;
    height: 50vh;
    text-align:center;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;`

class PLInfo extends React.Component {
    state = {
        playlistDetail: {},
        playlistTrack: "addButton",
        name: "",
        artist: "",
        url: ""
    }

    componentDidMount() {
        this.getPlaylistDetail()
    }

    getPlaylistDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}`, {
            headers: {
                Authorization: "rodrigo-souza-epps"
            }
        }).then((response) => {
            this.setState({playlistDetail: response.data.result.tracks})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    addTrack = () => {
        if (this.state.playlistTrack === "addButton") {
            this.setState({playlistTrack: "addTrackForm"})
        } else {
            this.setState({playlistTrack: "addButton"})
        }
    }

    trackName = (event) => {
        const TrackNameValue = (event.target.value)
        this.setState({name: TrackNameValue})
    }

    trackArtist = (event) => {
        const TrackArtistValue = (event.target.value)
        this.setState({artist: TrackArtistValue})
    }

    trackLink = (event) => {
        const TrackLinkValue = (event.target.value)
        this.setState({url: TrackLinkValue})
    }

    addTrackToPlaylist = () => {
        const body = {
            name: "this.state.name", 
            artist: "this.state.artist",
            url: "this.state.url"
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}`, body, {
            headers: {
                Authorization: "rodrigo-souza-epps"
            }
        }).then(() => {
            this.setState({name: "", artist: "", url: ""})
            this.getPlaylistDetail()
            this.addTrack()
            alert(`A música ${this.state.name} foi adicionada com sucesso!`)
        }).catch((error) => {
            alert("Houve um erro!")
            console.log(error.message)
        })
    }

    render() {
        const playlistTrack = 
        this.state.playlistTrack === "addButton" ? (
            <button onClick={this.addTrack}>Adicionar Música na Playlist</button>
        ) : (
            <div>
                <input placeholder="Nome da Música" type="text" value={this.state.name} onChange={this.trackName}></input>
                <input placeholder="Artista" type="text" value={this.state.artist} onChange={this.trackArtist}></input>
                <input placeholder="Url" type="link" value={this.state.url} onChange={this.trackLink}></input>
                <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
            </div>
        )

        return(
            <Div2>
                <div>
                    <p>{this.state.playlistDetail.name}</p>
                    <p>{this.state.playlistDetail.artist}</p>
                    <p>{this.state.playlistDetail.url}</p>
                </div>
                <div>
                    {playlistTrack}
                </div>
                <hr />
                <button onClick={this.props.changePage}>Deletar Playlists!</button>
            </Div2>
        )
    }
}

export default PLInfo