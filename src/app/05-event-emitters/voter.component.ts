import { EventEmitter } from '@angular/core';

export class VoterComponent {
    totalVotes = 0;
    votesChanged = new EventEmitter();
    downVotes(){
        this.totalVotes--;
    }
    upVotes(){
        this.totalVotes++;
        this.votesChanged.emit(this.totalVotes);
    }
}