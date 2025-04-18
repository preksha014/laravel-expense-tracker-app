// Modal handling for expenses and groups
document.addEventListener('DOMContentLoaded', function() {
    // Expense edit modal handling
    document.querySelectorAll('[data-action="edit-expense"]').forEach(button => {
        button.addEventListener('click', function() {
            const expense = {
                id: this.dataset.id,
                name: this.dataset.name,
                amount: this.dataset.amount,
                date: this.dataset.date,
                groupId: this.dataset.groupId
            };

            const modal = document.getElementById('editExpenseModal');
            const form = modal.querySelector('#editExpenseForm');
            form.action = `/expenses/${expense.id}`;
            
            modal.querySelector('#edit_name').value = expense.name;
            modal.querySelector('#edit_amount').value = expense.amount;
            modal.querySelector('#edit_date').value = expense.date;
            modal.querySelector('#edit_group_id').value = expense.groupId || '';

            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });

    // Expense delete modal handling
    document.querySelectorAll('[data-action="delete-expense"]').forEach(button => {
        button.addEventListener('click', function() {
            const expenseId = this.dataset.id;
            const modal = document.getElementById('deleteExpenseModal');
            const form = modal.querySelector('#deleteExpenseForm');
            form.action = `/expenses/${expenseId}`;

            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });

    // Group edit modal handling
    document.querySelectorAll('[data-action="edit-group"]').forEach(button => {
        button.addEventListener('click', function() {
            const group = {
                id: this.dataset.id,
                name: this.dataset.name
            };

            const modal = document.getElementById('editGroupModal');
            const form = modal.querySelector('#editGroupForm');
            form.action = `/groups/${group.id}`;
            
            modal.querySelector('#edit_group_name').value = group.name;

            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });

    // Group delete modal handling
    document.querySelectorAll('[data-action="delete-group"]').forEach(button => {
        button.addEventListener('click', function() {
            const groupId = this.dataset.id;
            const modal = document.getElementById('deleteGroupModal');
            const form = modal.querySelector('#deleteGroupForm');
            form.action = `/groups/${groupId}`;

            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });
});