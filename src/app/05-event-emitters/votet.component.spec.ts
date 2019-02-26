import { VoterComponent } from "./voter.component";

describe('VoterComponent',()=>{
    let compoent: VoterComponent;
    beforeEach(()=>{
        compoent = new VoterComponent();
    });
    it('should emit event on upvotes',()=>{
        let totalVotes =null;
        compoent.votesChanged.subscribe(val => totalVotes = val);
        compoent.upVotes();
        expect(totalVotes).not.toBeNull();
    })
})