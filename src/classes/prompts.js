let prompts = {
    ask: [
        { name: 'Capability', question: 'Is this person able to give or do what I want?' },
        { name: 'Priorities', question: 'Is getting my objective more important than my relationship with this person?' },
        { name: 'Self-respect', question: 'Will asking help me feel competent and self-respecting?' },
        { name: 'Rights', question: 'Is the person required by law or moral code to do or give me what I want?' },
        { name: 'Authority', question: 'Am I responsibile for telling the person what to do?' },
        { name: 'Relationship', question: 'Is what I want appropriate for this relationship?  (Is it right to ask for what I want?)' },
        { name: 'Goals', question: 'Is asking important to a long-term goal?' },
        { name: 'Give and take', question: 'Do I give as much as I get with this person?' },
        { name: 'Homework', question: 'Do Iknow what I want and have the facts I need to support my request?' },
        { name: 'Timing', question: 'Is this a good time to ask?  (Is the person in the right mood?)' },
    ],
    sayNo: [
        { name: 'Capability', question: 'Can I give the person what is wanted?' },
        { name: 'Priorities', question: 'Is my relationship more important than saying no?' },
        { name: 'Self-respect', question: 'Will saying no make me feel bad about myself?' },
        { name: 'Rights', question: 'Am I required by law or moral code to give or do what is wanted, or does saying no violate this person\'s rights?' },
        { name: 'Authority', question: 'Is the other person responsible for telling me wehat to do?' },
        { name: 'Relationship', question: 'Is what the person is requesting of me appropriate to my relationship with this person?' },
        { name: 'Goals', question: 'In the long term, will I regret saying no?' },
        { name: 'Give and take', question: 'Do I oew this person a favor?  (Does the person do a lot for me?)' },
        { name: 'Homework', question: 'Do I know what I am saying no to?  (Is the other person clear about what is being asked for?)' },
        { name: 'Timing', question: 'Should I wait a while before saying no?  (e }.g. Am I in a bad mood right now?)' },
    ],
};

export default Object.freeze(prompts);
export const PromptCount = prompts.ask.length;