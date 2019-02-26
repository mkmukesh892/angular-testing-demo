export class VoterComponent {
    totalVotes: number =0;
    upVotes(){
        return this.totalVotes++;
    }
    downVotes(){
        return this.totalVotes--;
    }
}