import { getChecklists } from './ChecklistService'

describe('', () => {
  it('loadChecklists', () => {
    localStorage.setItem('checklists', JSON.stringify(
      {
        'some-checklist-123': {
          'id': 'some-checklist-123',
          'name': 'Some checklist 123',
          'description': 'Checklist description 456',
          'tasks': [{ 'description': 'First task' }, { 'description': 'Second task' }]
        }
      }
    ))
    
    const checklists = getChecklists()
    
    expect(checklists).toHaveLength(1)
  })
})