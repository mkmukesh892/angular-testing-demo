import {VoterComponent} from './voter.component';
describe('VoterComponent',()=>{
    let component: VoterComponent;
    beforeEach(()=>{
        component = new VoterComponent();
    })
    it('should increment totalVotes when upvoted',()=>{
        component.upVotes();
        expect(component.totalVotes).toBe(1);
    });
    it('should decrement totalVotes when downvoted',()=>{
        component.downVotes();
        expect(component.totalVotes).toBe(-1);
    });
});