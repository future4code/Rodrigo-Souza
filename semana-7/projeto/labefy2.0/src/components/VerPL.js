import React from "react";
import styled from "styled-components";
import axios from "axios";
import PLInfo from "./PLInfo";

const DeleteButton = styled.button`
    background-color: red;
    color: white;
`



class VerPL extends React.Component {
  state = {
    playlists: [],
    currentPage: "playlists",

  }

  componentDidMount = () => {
      this.getAllPlaylists()
    }

  getAllPlaylists = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
          headers: {
              Authorization: "rodrigo-souza-epps"
            }
        }).then((response) => {
            this.setState({playlists: response.data.result.list})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
            headers: {
                Authorization: "rodrigo-souza-epps"
            }
        }).then((response) => {
            alert(`Playlist deletada com sucesso!`)
            this.getAllPlaylists()
        }).catch((error) => {
            alert(`Houve um erro ao deletar esta Playlist!.`)
            console.log(error.message)
        })
    }

    changePage = (playlistId) => {
        if (this.state.currentPage === "playlist") {
            this.setState({currentPage: "playlistDetail", playlistId: playlistId})
        } else {
            this.setState({currentPage: "playlist", playlistId: ""})
        }
    }

  render() {
    
        return (
            <div>
                {this.state.currentPage === "playlist" ? (
                    <div>
                        <ul>
                            {this.state.playlists.length === 0 && <div>Não há playlists criadas!</div>}
                            {this.state.playlists.map(playlist => {
                                return (
                                <li key={playlist.id}>{playlist.name} <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>Deletar Playlist</DeleteButton></li>
                                )
                            })}        
                        </ul>
                    </div>
        
                ) : (
                    <PLInfo userId={this.state.userId} changePage={this.changePage} />
                )}
            </div>
        )
    }
}

export default VerPL;